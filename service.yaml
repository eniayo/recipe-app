apiVersion: v1
kind: Service
metadata:
  name: recipe-app
spec:
  selector:
    app: recipe-app
  ports:
    - protocol: "TCP"
      port: 80
      targetPort: 3000
  type: LoadBalancer

