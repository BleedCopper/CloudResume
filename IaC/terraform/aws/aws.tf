
resource "aws_s3_bucket" "tfBucket" {
  bucket = "aws.rissaquindoza.com"

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

# resource "aws_s3_bucket_policy" "bucket-policy" {
#   bucket = data.aws_s3_bucket.selected-bucket.id
#   policy = data.aws_iam_policy_document.iam-policy-1.json
# }

# data "aws_iam_policy_document" "iam-policy-1" {
#   statement {
#     sid    = "AllowPublicRead"
#     effect = "Allow"
#     resources = [
#       "arn:aws:s3:::www.${var.bucket_name}",
#       "arn:aws:s3:::www.${var.bucket_name}/*",
#     ]
#     actions = ["S3:GetObject"]
#     principals {
#       type        = "*"
#       identifiers = ["*"]
#     }
#   }

#   depends_on = [aws_s3_bucket_public_access_block.example]
# }


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