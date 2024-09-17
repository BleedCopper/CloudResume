resource "aws_dynamodb_table" "tfDb" {
  name = "viewcount"
  hash_key = "ID"

  attribute {
    name = "ID"
    type = "S"
  }

  tags = {
    purpose   = "cloudresume"
  }

  read_capacity = 1
  write_capacity = 1
}