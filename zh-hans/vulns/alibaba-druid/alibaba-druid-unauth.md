# 💛 Alibaba Druid-未授权访问

### 1）漏洞信息

|漏洞名称	|受影响组件	|漏洞类型	|漏洞编号	|
|--	|--	|--	|--	|
|阿里巴巴Druid未授权访问	|[Alibaba Druid](https://github.com/alibaba/druid)	|未授权访问	|暂无	|

|漏洞简介	|
|--	|
|<p>    Druid是阿里巴巴数据库事业部出品，为监控而生的数据库连接池。</p><p>    Druid提供监控功能，监控SQL的执行时间、Web URI的请求、Session等。</p><p>    当开发者配置不当时就可能造成未授权访问漏洞。</p>	|

|参考链接	|
|--	|
|<ol><li><a href="https://www.cxybb.com/article/qq_46119575/128542168">https://www.cxybb.com/article/qq_46119575/128542168</a></li><li><a href="https://blog.csdn.net/hawinlolo/article/details/125481204">https://blog.csdn.net/hawinlolo/article/details/125481204</a></li></ol>	|

|补丁及修复方案	|
|--	|
|暂无	|


### 2）漏洞环境

暂无

### 3）漏洞复现

```
python3 vulcat.py -u <URL> -a alidruid

# 注意, vulcat-v2.0.0版本及以上, 应使用以下命令
python3 vulcat.py -u <URL> -v alibaba-druid
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/alibaba/unauth/01.png" alt=""><figcaption></figcaption></figure>

Target返回了一个URL链接，访问后可以看到Druid界面
```
http://XXX/druid/index.html
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/alibaba/unauth/02.png" alt=""><figcaption></figcaption></figure>

待更新...
