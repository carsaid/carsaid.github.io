# 💛 JBoss未授权访问

### 1）漏洞信息

|漏洞名称	|受影响组件	|漏洞类型	|漏洞编号	|
|--	|--	|--	|--	|
|JBoss未授权访问	|[JBoss](https://www.jboss.org)	|未授权访问	|暂无	|

|漏洞简介	|
|--	|
|在默认情况下无需账密就可以直接访问jboss管理控制台	|

|参考链接	|
|--	|
|<ol><li><a href="https://codeantenna.com/a/vUzclyNJBg">https://codeantenna.com/a/vUzclyNJBg</a></li></ol>	|

|补丁及修复方案	|
|--	|
|<ol><li>对jmx-console和web-console界面访问增加强认证</li><li>关闭jmx-console和web-console，提高安全性</li></ol>	|


### 漏洞环境

```
docker pull testjboss/jboss
docker run -itd -p 80:8080 testjboss/jboss
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jboss/unauth/01.png" alt=""><figcaption></figcaption></figure>


### 漏洞复现

```
python3 vulcat.py -u <URL> -a jboss -v unauth

# 注意, vulcat-v2.0.0版本及以上, 应使用以下命令
python3 vulcat.py -u <URL> -v jboss-unauth
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jboss/unauth/02.png" alt=""><figcaption></figcaption></figure>

访问Target可以看到jboss管理页面
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jboss/unauth/03.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jboss/unauth/04.png" alt=""><figcaption></figcaption></figure>

此外，返回信息中还提供了一个脚本地址：https://github.com/joaomatosf/jexboss
* 该脚本可用于检测jboss漏洞

获取该脚本并运行
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jboss/unauth/05.png" alt=""><figcaption></figcaption></figure>

如图，检测到了3个漏洞
* jexboss会询问你是否要利用漏洞
* 输入yes则进入漏洞利用模式
* 输入NO则退出
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jboss/unauth/07.png" alt=""><figcaption></figcaption></figure>

如果漏洞利用成功，则会返回一个持续的Shell
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jboss/unauth/08.png" alt=""><figcaption></figcaption></figure>

你可以持续输入相关命令，例如：
* whoami
* id
* uname -a
* cat /etc/passwd
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jboss/unauth/09.png" alt=""><figcaption></figcaption></figure>
