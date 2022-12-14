pipeline {
    agent any
        
    tools {nodejs "node"}

    stages {
    stage('Checkout')
    {
    steps {
    git branch: 'main', url: 'https://github.com/Sirusthevirus/COMP313Capstone.git'
            }
        }
        stage("Build") {
            steps {
                bat 'npm install --silent'
                bat 'npm run build & npx wait-on http://localhost:3000'
            }
        }
    }
}