FROM php:8.0-apache
WORKDIR /var/www/html

COPY index.php index.php
ADD project_s23-gamblers project_s23-gamblers
COPY apache-selfsigned.crt /etc/ssl/certs/apache-selfsigned.crt
COPY apache-selfsigned.key /etc/ssl/private/apache-selfsigned.key
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf 
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apt update && a2enmod ssl && service apache2 restart
RUN apt install -y git
RUN service apache2 restart && chmod 755 /var/www/html

EXPOSE 443