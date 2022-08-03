include .env

run:
	docker-compose -p ${NAME} up --build

stop:
	docker-compose stop

set:
	export JS_PORT=${JS_PORT} PY_PORT=${PY_PORT} HOST=${HOST}; \
	envsubst '$${JS_PORT} $${PY_PORT} $${HOST}' < nginx.conf > /etc/nginx/sites-enabled/${NAME}.conf
	sudo systemctl restart nginx
	sudo certbot --nginx

check:
	curl -w "%{time_total}\n" -X POST -H "Content-Type: application/json" -d '${CURL}' ${ENDPOINT_JS}
	curl -w "%{time_total}\n" -X POST -H "Content-Type: application/json" -d '${CURL}' ${ENDPOINT_PY}
