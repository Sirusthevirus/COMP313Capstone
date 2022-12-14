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
            }
        }
        stage("Test"){
            steps{
                bat 'npm run build'
            }
        }
    }
}