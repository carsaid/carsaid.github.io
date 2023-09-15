# 代理

支持HTTP/HTTPS、Socks4、Socks5代理



## --http-proxy

<figure>这里用Burp Suite做演示，监听192.168.80.1的8080端口<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/httpproxy_01.png" alt=""><figcaption></figcaption></figure>

<figure>此时HTTP历史记录为空<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/httpproxy_02.png" alt=""><figcaption></figcaption></figure>

```
python3 vulcat.py -u <URL> --http-proxy 192.168.80.1:8080
```

<figure>运行扫描，并指定代理地址为192.168.80.1:8080<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/httpproxy_03.png" alt=""><figcaption></figcaption></figure>

<figure>再次查看Burp，可以看到请求历史记录，代理成功<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/httpproxy_04.png" alt=""><figcaption></figcaption></figure>

## --socks4-proxy

运行pip下载代理搭建工具，项目地址：https://github.com/qwj/python-proxy
```
pip3 install pproxy
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_01.png" alt=""><figcaption></figcaption></figure>

新建一个命令行窗口，运行pproxy
默认代理三种协议：http、socks4、socks5
默认端口为8080
-vv选项启动命令行日志
```
pproxy -vv
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_02.png" alt=""><figcaption></figcaption></figure>

```
python3 vulcat.py -u <URL> --socks4-proxy 127.0.0.1:8080
```

<figure>运行扫描，并指定socks4代理为8080端口<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_03.png" alt=""><figcaption></figcaption></figure>

<figure>返回pproxy的窗口，可以看到日志输出，说明代理成功<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_04.png" alt=""><figcaption></figcaption></figure>

## --socks5-proxy

运行pip下载代理搭建工具，项目地址：https://github.com/qwj/python-proxy
```
pip3 install pproxy
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_01.png" alt=""><figcaption></figcaption></figure>

### socks5 无身份验证

新建一个命令行窗口，运行pproxy
默认代理三种协议：http、socks4、socks5
默认端口为8080
-vv选项启动命令行日志
```
pproxy -vv
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_02.png" alt=""><figcaption></figcaption></figure>

```
python3 vulcat.py -u <URL> --socks5-proxy 127.0.0.1:8080
```
<figure>运行扫描，并指定socks5代理为8080端口<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_05.png" alt=""><figcaption></figcaption></figure>

<figure>返回pproxy的窗口，可以看到日志输出，说明代理成功<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_06.png" alt=""><figcaption></figcaption></figure>


### socks5 有身份验证

-l 指定本地代理地址：**协议://地址:端口#账号:密码**
* 协议，多个协议可以使用逗号分隔
* 地址可以省略，省略则监听全局
* #账号:密码 可以省略，省略则无身份验证

```
pproxy -vv -l socks5://:8080#admin:123456
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_08.png" alt=""><figcaption></figcaption></figure>

<figure>运行扫描，如果不添加 账号和密码，则扫描失败：<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_09.png" alt=""><figcaption></figcaption></figure>

```
python3 vulcat.py -u <URL> --socks5-proxy admin:123456@127.0.0.1:8080
```
<figure>再次运行扫描，这次添加 账号和密码：<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_10.png" alt=""><figcaption></figcaption></figure>

<figure>返回pproxy的窗口，可以看到正常日志输出，说明代理成功<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/socks_11.png" alt=""><figcaption></figcaption></figure>
