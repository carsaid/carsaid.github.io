# 导出报告

## -o/--output

一般情况下，vulcat当发现漏洞时 会直接将漏洞信息输出到**命令行**中，如图
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_01.png" alt=""><figcaption></figcaption></figure>

你可以将漏洞信息导出到文件中，以便存储和查看


### 导出.txt

```
python3 vulcat.py -u <URL> -o txt
```

当检测到漏洞时，会在当前目录下生成一个“vulcat_当前时间.txt”的文件，如图
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_txt_01.png" alt=""><figcaption></figcaption></figure>


文件内容如下：
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_txt_02.png" alt=""><figcaption></figcaption></figure>

相当于：把命令行输出的信息 直接复制到了.txt文件中，并添加了 分隔符号和时间
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_txt_03.png" alt=""><figcaption></figcaption></figure>

### 导出.json

```
python3 vulcat.py -u <URL> -o json
```

当检测到漏洞时，会在当前目录下生成一个“vulcat_当前时间.json”的文件，如图
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_json_01.png" alt=""><figcaption></figcaption></figure>


会将漏洞信息json化，文件内容如下：
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_json_02.png" alt=""><figcaption></figcaption></figure>

### 导出.html

```
python3 vulcat.py -u <URL> -o html
```

当检测到漏洞时，会在当前目录下生成一个“vulcat_当前时间.html”的文件，如图
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_01.png" alt=""><figcaption></figcaption></figure>

HTML报告分为5块区域，文件内容如下：
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_02.png" alt=""><figcaption></figcaption></figure>

#### 顶部-切换报告样式

在顶部的最右边，有一个“样式切换器”
当移动鼠标到“Style”上面之后，就会出现样式列表
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_03.png" alt=""><figcaption></figcaption></figure>

你可以通过点击你想要的样式来切换
（目前样式不多，以后会慢慢增加）
（你也可以提交你想要的样式，我会添加进去）
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_04.png" alt=""><figcaption></figcaption></figure>

#### 内容过滤器

页面左侧是“内容过滤器”，带有“√”的都可以点击
当一个选项被勾选，右侧的内容区会显示这个内容
相应的，如果取消勾选，则不会显示这个内容

示例：取消勾选“CNNVD-201901-445”，则相应的条目会隐藏
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_05.png" alt=""><figcaption></figcaption></figure>

#### 标题栏

你可以通过单击相应的标题，来对内容条目进行“升序/降序”
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_06.png" alt=""><figcaption></figcaption></figure>


#### 内容区

你可以单击某个条目，将其展开，展开后你会看到如下信息：
* 漏洞URL
* 漏洞数据包（如果有多个数据包，将会显示Request-1、Request-2以此类推）

点击复制按钮“Copy”可以自动将数据包内容 复制到粘贴板

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_07.png" alt=""><figcaption></figcaption></figure>

#### 底部

平平无奇的底部
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_08.png" alt=""><figcaption></figcaption></figure>
