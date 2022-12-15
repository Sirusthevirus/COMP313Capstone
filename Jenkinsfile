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
                bat 'npm start'
            }
        }
        stage("Test") {
            steps {
                echo "Running tests"
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'buildArtifact.txt', onlyIfSuccessful: true
        }
    }
}