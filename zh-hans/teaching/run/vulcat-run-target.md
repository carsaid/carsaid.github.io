# 指定目标站点

## -u/--url

此参数用于指定单个站点 并进行扫描（很常见的参数）

```
python3 vulcat.py -u http://xxx.com
python3 vulcat.py --url http://xxx.com
```

我这里使用python 启动一个本地的HTTP服务器进行测试：

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/url_01.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/url_02.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/url_03.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/url_04.png" alt=""><figcaption></figcaption></figure>


<figure>如果目标站点无法访问，则：<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/url_05.png" alt=""><figcaption></figcaption></figure>

## -f/--file

此参数用于指定一个文件，vulcat会从这个文件中 批量读取URL并进行扫描，格式为每行一个URL

```
python3 vulcat.py -f url.txt
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/file_01.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/file_02.png" alt=""><figcaption></figcaption></figure>

可以看到，url.txt里面有3个站点，vulcat会逐个去扫描

（什么？你问我为什么是一个一个扫，不能全部同时扫吗？---正在考虑更新这个功能）

## -r/--recursive

此参数可以递归 扫描URL的每层目录

（和**dirsearch**的-r/--recursive是相同的作用，项目地址：[https://github.com/maurosoria/dirsearch](https://github.com/maurosoria/dirsearch)）

默认情况下，vulcat**只会检测zxc/目录下有无漏洞**，而不会去检测 根目录、qwe/以及asd/目录，这可能会导致你错过某个漏洞：

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/recursive_01.png" alt=""><figcaption></figcaption></figure>

如果手动指定每个路径 又太麻烦了，这时候你可以使用-r/--recursive参数

```
python3 vulcat.py -u http://192.168.80.1/qwe/asd/zxc/ -r
```

添加-r参数之后，vulcat会将Payload作用到每一层目录：

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/recursive_02.png" alt=""><figcaption></figcaption></figure>

建议每次扫描时都添加-r参数，这样可以扩大检测范围，提高漏洞发现几率

（后续可能会为vulcat添加爬虫功能，自动爬取站点上的所有目录 并进行检测）
