# 自定义攻击载荷

在vulcat根目录下，存在一个<code>demo.py</code>文件，该文件是Payload模板，你可以基于它来编写POC或EXP
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads/01.png" alt=""><figcaption></figcaption></figure>


<code>demo.py</code>结构
* 文件定义了一个<code>Scan</code>类，继承自插件系统的<code>Vuln_scan</code>
* 其中实现了三个主要方法：POC、EXP以及Start
* POC验证漏洞，EXP利用漏洞，Start负责调配这两个方法
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads/02.png" alt=""><figcaption></figcaption></figure>

插件系统中的<code>Vuln_scan</code>

只要某个类继承<code>Vuln_scan</code>，并实现了其中的三个方法，就会被vulcat识别为有效的攻击载荷

将你编写的载荷放入对应路径，vulcat就会自动加载该载荷，并对检测目标使用
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads/03.png" alt=""><figcaption></figcaption></figure>
