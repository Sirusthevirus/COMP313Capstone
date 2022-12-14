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
    stage('Maven Build') {
    steps {
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
			bat "mvn clean compile"
            }
        }
    }
}