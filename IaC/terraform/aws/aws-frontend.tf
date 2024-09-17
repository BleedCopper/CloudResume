
resource "aws_s3_bucket" "tfBucket" {
  bucket = "aws.rissaquindoza.com"

  tags = {
    purpose   = "cloudresume"
  }  
}

resource "aws_s3_bucket_ownership_controls" "s3_bucket_acl_ownership" {
  bucket = aws_s3_bucket.tfBucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
  depends_on = [aws_s3_bucket_public_access_block.tfAccess]
}

resource "aws_s3_bucket_public_access_block" "tfAccess" {
  bucket = aws_s3_bucket.tfBucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "bucket-acl" {
  bucket = aws_s3_bucket.tfBucket.id
  acl    = "public-read"
  depends_on = [aws_s3_bucket_public_access_block.tfAccess]
}

resource "aws_s3_bucket_policy" "website_policy" {
  bucket = aws_s3_bucket.tfBucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "PublicReadGetObject"
        Effect = "Allow"
        Principal = "*"
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.tfBucket.arn}/*"
      }
    ]
  })
  depends_on = [aws_s3_bucket_public_access_block.tfAccess, aws_s3_bucket_acl.bucket-acl]
}

resource "aws_s3_bucket_website_configuration" "tfWebsite" {
  bucket = aws_s3_bucket.tfBucket.id

  index_document {
    suffix = "index.html"
  }
}

locals {
  s3_origin_id = "S3-${aws_s3_bucket.tfBucket.bucket}"
}

resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.tfBucket.bucket_regional_domain_name
    origin_id   = local.s3_origin_id
  }

  enabled = true
  is_ipv6_enabled = true
  default_root_object = "index.html"

  aliases = ["aws.rissaquindoza.com"]

  tags = {
    purpose   = "cloudresume"
  }

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    compress = true
    cached_methods = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id
    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  # viewer_certificate {
  #   cloudfront_default_certificate = true
  # }
  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.tfCert.arn
    ssl_support_method = "sni-only"
  }

  # Additional settings...
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

resource "aws_acm_certificate" "tfCert" {
  provider = aws.us-east-1
  domain_name       = aws_s3_bucket.tfBucket.bucket
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    purpose   = "cloudresume"
  }
}

resource "aws_acm_certificate_validation" "tfCert" {
  provider = aws.us-east-1
  certificate_arn         = aws_acm_certificate.tfCert.arn
  validation_record_fqdns = ["${cloudflare_record.cert_validation.name}"]
}