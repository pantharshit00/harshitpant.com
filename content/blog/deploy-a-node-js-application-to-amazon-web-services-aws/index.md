---
draft: false
title: Deploy a Node.js Application to Amazon Web Services (AWS)
author: Harshit Pant
date: 2017-05-10
tags:
  - deployment
  - node
cover: ./cover.png
---

https://youtu.be/neXSroCrNd8

In this blog post I am going to show how you can deploy a simple node js web application to amazon web services so that it can be live over the internet. I will try my best to use the best practices in this tutorial

---

## Prerequisites

1. Install [Git Bash](http://git-scm.com) if you are using windows(Terminal is enough in Mac or Linux)
2. Sign Up for AWS

---

## Launch an EC2 instance

1. Go to [AWS](https://aws.amazon.com) and sign into your console
2. Under Services tab up in the navbar choose EC2 to go into the EC2 console
3. Go to the instance tab from the sidebar
4. Click on Launch instance from the instance menu
5. Under OS select Ubuntu 16.04 or which ever OS you like
6. Select the instance size
7. Leave networking and other stuff to default
8. Leave the storage to default too in the next tab
9. Configure the security group. Add all the ports from the menu you want (eg PORT 80 for http)
10. Click Review and Launch
11. From the pop up, choose create a new key pair and download the key pair.
12. Click on launch instance

---

## SSH into the server

After in the EC2 console the status of the instance is running, go ahead and click on the instance and copy the public IP from the menu opened and follow the following steps.

1. Open git bash if you are in windows or terminal if you are in mac or Linux.
2. Navigate to the folder using `cd` where you downloaded the key pair.
3. SSH into the server by using the command `ssh -i "node.pem" ubuntu@54.53.223.175` Change the filename and IP address to yours. If it says keyfile permissions too open type `chmod 400 node.pem` to fix it.
4. You should be presented with the welcome message.

---

## Setting up Server

1. First update the package manager by `sudo apt-get update`
2. Then upgrade any outdated packages by `sudo apt-get upgrade`
3. Now we have to install node. `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && sudo apt-get install -y nodejs`
4. Verify the installation by `node -v`
5. Transfer your node application to the server. I recommend github repository for it. You may use rsync as well.
6. Install your npm dependencies by `npm install`
7. Start you application `node index.js`.Replace index.js with your app's starting script
8. In your browser go to `http://YOURSERVERIP:PORT`. You should see your app up and running.

---

## Run our app using forever

If you close your terminal now your app will stop working. We want to run it in the background. We will use the `forever` package.

1. Install forever by `sudo npm install -g forever`
2. Start your app using `forever start index.js` Replace index.js with your app's starting script.
3. In your browser go to `http://YOURSERVERIP:PORT`. You should see your app up and running.
4. Verify it in forever to by `forever list`

---

## Redirect port 80 to 8080

As by default browser communicate to port 80 of the server in http mode and port 443 in https. So we need to redirect port 8080 to port 80. Use this command for it.

```bash
sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
```
