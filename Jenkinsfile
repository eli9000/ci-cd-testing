pipeline {
  agent { docker { image 'node:6.3' } }
  environment {
    USER = credentials('eli9000')
    PASS = credentials('1234abcd')
  }
  parameters {
    string(name: 'Eli', defaultValue: 'Hello')
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm --version'
        sh 'echo "Howzit??"'
      }
    }
    stage('Test') {
      steps {
        sh '''
          echo "Multiple steps dawg!"
          ls -al
          pwd
          '''
      }
    }
  }
  post {
    always {
      echo "This always be runnin, great job ${params.name}"
    }
    success {
      echo 'Only runs if successful... duh'
    }
    failure {
      echo 'Shit done failed'
      mail to: 'eli9000@gmail.com',
           subject: "Failed Pipeline: ${env.USER}",
           body: "Something wrong with your password: ${env.PASS}"
    }
    unstable {
      echo 'Runs only if "run" was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}