# 辅助参数

## -t/--thread（增加/减少 并发量）

此参数用于设置线程数，默认为3（同一时间内，最少有3个POC在运行）

你可以通过 -t或--thread 来设置并发POC数量

```
python3 vulcat.py -u http://192.168.80.1/ -t 10
python3 vulcat.py -u http://192.168.80.1/ --thread 10
```

<figure>如图，进度条右边显示的总数缩短为了x/11（与默认线程进行对比）<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/thread.png" alt=""><figcaption></figcaption></figure>

## --delay（加快/放慢 扫描速度）

此参数用于设置**请求间隔时间**，默认为1秒
* 每个HTTP请求发送后
* and 每次并发之间
* 将会暂停1秒
* （防止请求过快，导致IP被封禁、）

如果你是单纯的想vulcat**扫描快一点**，可以将间隔时间**调低**

```
# 调整请求间隔时间为0.3秒

python3 vulcat.py -u http://192.168.80.1/ --delay 0.3
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/delay.png" alt=""><figcaption></figcaption></figure>

## --timeout（网络延迟高的时候，将该参数调高）

此参数用于设置**超时时间**，默认为10秒

发送的每一个HTTP请求，如果超过10秒 目标站点都没有响应，则请求超时，终止当前请求

对于**网速不好**的用户来说，应该将timeout调高
* 防止vulcat误认为目标站点不存活，从而跳过检查
* 防止POC超时，没有成功检测到漏洞

```
python3 vulcat.py -u http://192.168.80.1/ --timeout 30
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/timeout.png" alt=""><figcaption></figcaption></figure>

## --user-agent

此参数用于自定义User-Agent头，会覆盖config.yaml里的默认User-Agent

```
# 指定User-Agent头为abcdefg, 指定vulcat的HTTP代理地址为192.168.80.1:8080
python3 vulcat.py -u http://192.168.80.1/ --user-agent "abcdefg" --http-proxy 192.168.80.1:8080
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/useragent_01.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/useragent_02.png" alt=""><figcaption></figcaption></figure>

可以看到参数已经生效

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/useragent_03.png" alt=""><figcaption></figcaption></figure>

## --cookie

此参数用于指定Cookie

```
python3 vulcat.py -u http://192.168.80.1/ --cookie "sessid=xxxxxx; user=admin" --http-proxy 192.168.80.1:8080
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/cookie_01.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/cookie_02.png" alt=""><figcaption></figcaption></figure>

## --auth

此参数用于指定Authorization

```
python3 vulcat.py -u http://192.168.80.1/ --auth "Basic YWRtaW46YWRtaW4=" --http-proxy 192.168.80.1:8080
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/auth_01.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/auth_02.png" alt=""><figcaption></figcaption></figure>
