pipeline {
    agent any
        
    stages {
    stage('Checkout')
    {
    steps {
    git branch: 'main', url: 'https://github.com/Sirusthevirus/COMP313Capstone.git'
            }
        }
        stage("Build") {
            steps {
                bat "npm install"
                bat "npm run build"
            }
        }
    }
}