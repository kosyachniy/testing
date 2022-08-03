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
DB_HOST=host
DB_PASS=password
SERVER=http://localhost:8123/
                </pre>
            </td>
            <td>
                <pre>
NAME=proj_name
MODE=prod
JS_PORT=8123
DB_HOST=host
DB_PASS=password
SERVER=/api/
HOST=subdomain.domain.com
                </pre>
            </td>
        </tr>
    </tbody>
</table>
2. <code> make run </code>

