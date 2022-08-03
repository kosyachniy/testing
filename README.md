# Performance test
## Run
1. Configure ` .env `
<table>
    <thead>
        <tr>
            <th>local</th>
            <th>prod</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <pre>
NAME=proj_name
MODE=local
JS_PORT=8123
PY_PORT=8124
DB_HOST=host
DB_PASS=password
SQL1=sql_request_1
SQL2=sql_request_2
CURL=curl_request
ENDPOINT_JS=http://localhost:8123/
ENDPOINT_PY=http://localhost:8124/
                </pre>
            </td>
            <td>
                <pre>
NAME=proj_name
MODE=prod
JS_PORT=8123
PY_PORT=8124
DB_HOST=host
DB_PASS=password
HOST=subdomain.domain.com
SQL1=sql_request_1
SQL2=sql_request_2
CURL=curl_request
ENDPOINT_JS=https://subdomain.domain.com/js/
ENDPOINT_PY=http://subdomain.domain.com/py/
                </pre>
            </td>
        </tr>
    </tbody>
</table>
2. <code> make run </code>

