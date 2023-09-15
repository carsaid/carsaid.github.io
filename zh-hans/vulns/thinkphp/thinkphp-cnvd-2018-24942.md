# 🧡 ThinkPHP-未开启强制路由导致RCE

### 1）漏洞信息

|漏洞名称	|受影响组件	|漏洞类型	|漏洞编号	|
|--	|--	|--	|--	|
|<p>ThinkPHP未开启强制路由RCE</p>	|[ThinkPHP](https://github.com/top-think/think)	|远程代码执行	|CNVD-2018-24942	|

|漏洞简介	|
|--	|
|<p>由于框架对控制器名没有进行足够的检测，</p><p>会导致在没有开启强制路由的情况下，存在可能的getshell漏洞</p>	|

|参考链接	|
|--	|
|<ol><li><a href="https://github.com/vulhub/vulhub/blob/master/thinkphp/5-rce/README.zh-cn.md">https://github.com/vulhub/vulhub/blob/master/thinkphp/5-rce/README.zh-cn.md</a></li><li><a href="https://cloud.tencent.com/developer/article/1976619">https://cloud.tencent.com/developer/article/1976619</a></li><li><a href="https://xz.aliyun.com/t/3570">https://xz.aliyun.com/t/3570</a></li></ol>	|

|补丁及修复方案	|
|--	|
|<ol><li>（官方）<a href="https://www.thinkphp.cn/topic/60400.html">https://www.thinkphp.cn/topic/60400.html</a></li></ol>	|

### 漏洞环境

#### 方案一
使用[vulhub](https://github.com/vulhub/vulhub)搭建漏洞环境

```
git clone https://github.com/vulhub/vulhub
cd vulhub/thinkphp/5-rce
docker-compose up -d
```

启动vulhub环境后，访问8080端口即可看到thinkphp页面

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/thinkphp/cnvd-2018-24942/01.png" alt=""><figcaption></figcaption></figure>


#### 方案二
使用[vulfocus](https://github.com/fofapro/vulfocus)搭建漏洞环境

```
docker pull vulfocus/thinkphp-cnvd_2018_24942
docker run -itd -p 80:80 vulfocus/thinkphp-cnvd_2018_24942
```

启动vulfocus环境后，访问80端口即可看到thinkphp页面

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/thinkphp/cnvd-2018-24942/02.png" alt=""><figcaption></figcaption></figure>


### 漏洞复现

```
python3 vulcat.py -u <URL> -a thinkphp -v cnvd-2018-24942

# 注意, vulcat-v2.0.0版本及以上, 应使用以下命令
python3 vulcat.py -u <URL> -v cnvd-2018-24942
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/thinkphp/cnvd-2018-24942/03.png" alt=""><figcaption></figcaption></figure>

直接访问漏洞URL
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/thinkphp/cnvd-2018-24942/04.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/thinkphp/cnvd-2018-24942/05.png" alt=""><figcaption></figcaption></figure>

vulfocus漏洞环境：
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/thinkphp/cnvd-2018-24942/06.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/thinkphp/cnvd-2018-24942/07.png" alt=""><figcaption></figcaption></figure>
