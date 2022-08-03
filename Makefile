include .env

run:
	docker-compose -p ${NAME} up --build

stop:
	docker-compose stop

set:
	export APP_PORT=${APP_PORT} JS_PORT=${JS_PORT} HOST=${HOST}; \
	envsubst '$${APP_PORT} $${JS_PORT} $${HOST}' < nginx.conf > /etc/nginx/sites-enabled/${NAME}.conf
	sudo systemctl restart nginx
	sudo certbot --nginx
