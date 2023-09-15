# Shell交互

类似于sqlmap的--os-shell选项，运行之后可以持续输入Payload并获得回显

## --shell

--shell选项支持**单个漏洞**的持续交互模式
使用--shell选项之前，需要先使用 -v 参数指定某个漏洞

```bash
python3 vulcat.py -u <URL> -a httpd -v cve-2021-42013 --shell --log 4

# 注意, 在v2.0.0版本及以上, -a选项被移除, 应改为使用以下命令
python3 vulcat.py -u <URL> -v cve-2021-42013 --shell --log 4
```

以Apache Httpd的CVE-2021-42013漏洞来做演示
* 添加--shell选项，如果存在该漏洞，则进入持续交互模式
* 这里还添加了日志4级，以便我们查看请求数据包
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/shell_01.png" alt=""><figcaption></figcaption></figure>

正常情况下，在输出漏洞信息后，扫描就会退出
如果添加了--shell选项，则会进入交换模式，如图：
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/shell_02.png" alt=""><figcaption></figcaption></figure>

此时你可以持续输入Payload，该漏洞为RCE，所以尝试输入命令id
可以成功看到下方的回显：uid=1(daemon)

（此外，--shell的日志4级有一个显示Bug，请求头与请求Body之间**少了一个空行**）
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/shell_03.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/shell_04.png" alt=""><figcaption></figcaption></figure>


## vcsearch语法

如果响应内容过多，**找不到回显的位置**怎么办？
或者 **只想要回显中的部分内容**
如果是RCE漏洞，可以使用 | grep 的方式
但并不是所有的grep都能够执行，RCE以外的漏洞也无法使用grep

vulcat实现了类似于grep的功能：vcsearch
vcsearch可以在获取 响应数据包后，在其中搜索指定内容并返回

### 演示

以Atlassian Confluence的CVE-2015-8399漏洞为例：

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_01.png" alt=""><figcaption></figcaption></figure>

进入交互模式后，读取/etc/passwd
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_02.png" alt=""><figcaption></figcaption></figure>

在一大堆响应内容中，慢慢的找到了回显的位置（麻烦）
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_03.png" alt=""><figcaption></figcaption></figure>

此时可以使用vcsearch语法，使用方式和 | grep 一样： 
**payload | vcsearch 搜索内容**

vcsearch不会跟随Payload被发送出去，而是在Payload执行完成之后 再进行搜索
注意：vcsearch的语法为**正则表达式**

<figure>匹配root前0-100，以及root后0-800个字符<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_04.png" alt=""><figcaption></figcaption></figure>

<figure>语法同上，匹配root前0-100，以及root后0-800个字符<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_05.png" alt=""><figcaption></figcaption></figure>

<figure>如果没有查找到内容，则：<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_06.png" alt=""><figcaption></figcaption></figure>



