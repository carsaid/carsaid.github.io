# DNSLOG平台

vulcat目前支持三个DNSLOG平台
* dnslog.cn
* ceye.io
* dnslog.pw

如果用户同时配置了多个DNSLOG平台，则使用优先级为：
* ceye.io > dnslog.pw > dnslog.cn
* 你也可以用--dns选项，手动指定其中的某个

## dnslog.cn

在没有配置ceye.io和dnslog.pw的情况下
* vulcat默认使用 dnslog.cn


以fastjson漏洞为例，添加日志4级选项
```
python3 vulcat.py -u <URL> -v fastjson --log 4
```

找到fastjson的请求日志，可以看到数据包内使用的是 dnslog.cn

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/dns_01.png" alt=""><figcaption></figcaption></figure>

强制使用dnslog.cn平台：

```
python3 vulcat.py -u <URL> --dns dnslog-cn
```

## ceye.io

<a href="../config/vulcat-config-ceye.html">点我查看ceye.io的配置方法</a>

将 域名和Token 写入config.yaml对应的位置，保存文件

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/dns_02.png" alt=""><figcaption></figcaption></figure>

运行扫描，vulcat会**自动切换**为 ceye.io
```
python3 vulcat.py -u <URL> -v fastjson --log 4
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/dns_03.png" alt=""><figcaption></figcaption></figure>

强制使用ceye.io平台
```
python3 vulcat.py -u <URL> --dns ceye
```

## dnslog.pw

<a href="../config/vulcat-config-dnslog-pw.html">点我查看dnslog.pw的配置方法</a>

将 域名和Token 写入config.yaml对应的位置，保存文件

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/config/dnslog_pw_04.png" alt=""><figcaption></figcaption></figure>

运行扫描，vulcat会**自动切换**为 ceye.io
```
python3 vulcat.py -u <URL> -v fastjson --log 4
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/dns_04.png" alt=""><figcaption></figcaption></figure>

强制使用dnslog.pw平台
```
python3 vulcat.py -u <URL> --dns dnslog-pw
```


## --dns

**强制使用某个DNSLOG平台**

如果你在config.yaml配置了多个DNSLOG平台，想使用其中的某个平台时，可以手动指定

添加--dns选项，强制使用 dnslog.cn
```
python3 vulcat.py -u <URL> -v fastjson --log 4 --dns dnslog-cn
```

强制使用 ceye.io：
```
# 记得要在config.yaml添加 域名和Token，否则就算指定ceye也无法正常使用
python3 vulcat.py -u <URL> -v fastjson --log 4 --dns ceye
```


强制使用 dnslog.pw：
```
# 记得要在config.yaml添加 域名和Token，否则就算指定dnslog.pw也无法正常使用
python3 vulcat.py -u <URL> -v fastjson --log 4 --dns dnslog-pw
```


