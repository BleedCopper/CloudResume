
resource "google_project_service" "cloud_run" {
  project = local.project
  service = "run.googleapis.com"
}

resource "google_project_service" "compute" {
  project = local.project
  service = "compute.googleapis.com"
}

resource "google_project_service" "app_engine" {
  service = "appengine.googleapis.com"
}


resource "google_cloud_run_domain_mapping" "custom_domain" {
  location      = local.region
  name          = "gcp.rissaquindoza.com"  
  metadata {
    namespace = local.project
  }
  spec {
    route_name = google_cloud_run_v2_service.frontend.name
  }
}


resource "google_service_account" "frontend" {
  account_id   = "frontend-service-account"
  display_name = "Frontend Service Account"
}


resource "google_cloud_run_v2_service" "frontend" {
  name     = "tf-cloud-fronted"
  location = local.region
  deletion_protection = false
  template {
    service_account = google_service_account.frontend.email
    containers {
      image = "us-east1-docker.pkg.dev/cloud-resume-436412/cloudresume/tf-cloud-fronted:latest"
      ports {
        container_port = 80
      }

      env {
          name  = "BACKEND_URL"
          value =  google_cloud_run_v2_service.backend.uri
        }
    }
  }
}

resource "google_cloud_run_service_iam_member" "allow_unauthenticated" {
  service = google_cloud_run_v2_service.frontend.name
  location = google_cloud_run_v2_service.frontend.location
  role    = "roles/run.invoker"
  member  = "allUsers"
}
resource "google_service_account" "backend" {
  account_id   = "backend-service-account"
  display_name = "Backend Service Account"
}

resource "google_project_iam_member" "backend_binding" {
  project = local.project
  role    = "roles/secretmanager.secretAccessor"
  member  = "serviceAccount:${google_service_account.backend.email}"
}

resource "google_cloud_run_v2_service" "backend" {
  name     = "tf-cloud-backend"
  location = local.region
  deletion_protection = false

  template {
    service_account = google_service_account.backend.email
    containers {
      image = "us-east1-docker.pkg.dev/cloud-resume-436412/cloudresume/tf-cloud-backend:latest"
      ports {
        container_port = 5000
      }
    }
  }
}

resource "google_cloud_run_service_iam_member" "backend_invoker" {
  service = google_cloud_run_v2_service.backend.name
  location = google_cloud_run_v2_service.backend.location
  role    = "roles/run.invoker"
  member  = "allUsers"
}
