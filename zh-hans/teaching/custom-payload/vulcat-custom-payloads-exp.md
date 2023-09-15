# 自定义攻击载荷-Exploit

##### vulcat只提供POC，不提供EXP，如有需要 可以自行编写

##### 本节以Apache Tomcat的CVE-2017-12615漏洞为例


## 1. vulcat的POC

在CVE-2017-12615的POC中，vulcat只会上传一个示例文件，而不会上传WebShell以及其它有危害的文件
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/02.png" alt=""><figcaption></figcaption></figure>

如图
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/03.png" alt=""><figcaption></figcaption></figure>


## 2. 编写EXP

原有的POC：<code>vulcat/payloads/ApacheTomcat/apache-tomcat-cve-2017-12615-fileupload.py</code>

将其复制一份，在__init__方法中，添加EXP所使用的Payload
* path：文件上传路径
* data：jsp一句话
* path-2：命令执行路径
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/04.png" alt=""><figcaption></figcaption></figure>

编写EXP方法
* 定义基本变量：client、vul_info
* 遍历载荷，生成随机文件路径，生成随机WebShell密码
* 获取载荷，并装入 随机文件路径 与 随机密码
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/05.png" alt=""><figcaption></figcaption></figure>


发出HTTP请求
* 第一个请求，上传WebShell
* 第二个请求，访问WebShell，判断结果是否为None
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/06.png" alt=""><figcaption></figcaption></figure>

修改方法Start()
* 注释self.POC()
* 返回一个self.EXP()的调用
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/07.png" alt=""><figcaption></figcaption></figure>

## 3. 扫描测试

修改EXP文件的文件名称，然后放入载荷路径
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/08.png" alt=""><figcaption></figcaption></figure>


运行EXP载荷，成功检测到漏洞，并返回了WebShell的URL链接
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/09.png" alt=""><figcaption></figcaption></figure>

访问WebShell
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/10.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/11.png" alt=""><figcaption></figcaption></figure>

