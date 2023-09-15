## 默认 Request Header

vulcat发送的所有HTTP请求，将默认带有以下Headers（**统一使用以下Headers**）

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/config/config_07.png" alt=""><figcaption></figcaption></figure>


注意事项：
* 如果在运行时，使用了--cookie、--user-agent、--auth等参数
* 将会覆盖config.yaml中的对应Request Header

例如：
* config.yaml配置了 **Cookie: session=123456**
* 运行时使用了参数 **--cookie="session=abcdefg"**
* --cookie优先级比较大，所以最终的Cookie为session=abcdefg
