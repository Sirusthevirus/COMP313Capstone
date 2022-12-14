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
                bat 'npm install --silent'
                //bat 'npm start & npx wait-on http://localhost:3000'
            }
        }
    }
}