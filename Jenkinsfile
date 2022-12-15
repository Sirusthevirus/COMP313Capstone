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
        stage('Deploy to Dev') {
            steps {
                echo 'Deploying to Dev Environment'
            }
        }
        stage('Deploy to QAT') {
            steps {
                echo 'Deploying to QAT Environment'
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging Environment'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production Environment'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'buildArtifact.txt'
        }
    }
}