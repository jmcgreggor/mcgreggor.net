# HOW TO GUIDE FOR BUILDING OUT THE ENVIRONMENT

1.	Deployed single droplet from Digital Ocean
2.	Create RSA key and added to new droplet
3.	Reset root password using passwd
4.	Verify Linux version
5.	Enable ssh login using password
6.	Restart ssh service
7.	Create non-root user
8.	Installed docker-ce
9.	Create non-root user
10.	Add new user to needed groups (ssh, admin, docker)
11.	Check docker version
12.	Skipped system install, already installed
13.	Install reverse proxy
14.	Check installation
15.	Enable firewall
16.	Check firewall status
17.	Enable firewall ports for ssh  
18.	Add reverse proxy to firewall rules
19.	Reload the firewall
20.	Check firewall rules
22.	Test
23.	Second verification
24.	Take a snapshot of the installation
25	Create new build of image
27.	Tag the image
28.	Push the image
29.	Ssh’d to new server
30.	Pull the latest docker build
31.	Make sure image has been downloaded
32.	Make a copy of the reverse proxy config
33.	Edit reverse proxy config to pass traffic from 80 to 8080 on in container
34.	Test that no syntax errors exist with the file
35.	Restart reverse proxy
36.	Check to see what ports are listening
37.	Run the container - for the process to work correctly (when restarting), be sure to restart in the following order…
a.	Firewall
b.	Reverse proxy
c.	Docker
39.	Update floating IP
40.	Update Hosted zone in AWS Route 53
