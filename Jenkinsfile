pipeline {
    agent any
        
    tools {nodejs "Node"}

    stages {
    stage('Checkout')
    {
    steps {
    git branch: 'master', url: 'https://github.com/Sirusthevirus/COMP313Capstone.git'
            }
        }
        stage("Build") {
            steps {
                bat 'npm install --silent'
                bat 'npm run build'
            }
        }
    }
}