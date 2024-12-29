import os

# List of directories to create within src
directories = [
    "models",
    "routes",
    "controllers",
    "config",
    "middleware",
    "utils",
    "public/images",
    "public/css",
    "public/js",
    "views"
]

# Base path for creating directories
base_path = os.getcwd()

# Create each directory
for directory in directories:
    os.makedirs(os.path.join(base_path, directory), exist_ok=True)
    print(f"Created directory: {directory}")

# List of files to create within those directories
# Each entry is a tuple (directory, filename)
files = [
    ("models", "UserModel.js"),
    ("routes", "userRoutes.js"),
    ("controllers", "userController.js"),
    ("config", "dbConfig.js"),
    ("middleware", "authMiddleware.js"),
    ("utils", "logger.js"),
    ("public/js", "app.js"),
    ("public/css", "style.css"),
    ("views", "index.ejs")
]

# Create each file
for directory, file in files:
    file_path = os.path.join(base_path, directory, file)
    with open(file_path, 'w') as f:
        content = "// Add your code here\n"
        f.write(content)
        print(f"Created file: {file_path}")

print("Project structure created successfully!")
