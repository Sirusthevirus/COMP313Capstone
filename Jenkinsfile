pipeline {
    agent any
    
    tools {
    maven "MAVEN"
    jdk "JDK"
    }
    
    stages {
    stage('Checkout')
    {
    steps {
    git branch: 'main', url: 'https://github.com/Sirusthevirus/COMP313Capstone.git'
            }
        }
    stage('NPM Build') {
    steps {
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            sh "sudo npm install"
            sh "sudo npm run build"
            }
        }
    }
}