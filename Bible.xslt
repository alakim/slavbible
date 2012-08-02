<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="Windows-1251" indent="yes"/>
	
	<xsl:template match="/">
		<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html;charset=windows-1251"/>
				<link rel="stylesheet" type="text/css" href="styles.css"/>
				
				<script type="text/javascript" src="js/html.js"></script>
				<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
				<script type="text/javascript" src="js/search.js"></script>
			</head>
			<body>
				<!--div><xsl:apply-templates select="//description//annotation/p"/></div>
				<h1><xsl:value-of select="//body//title"/></h1-->
				<h1><xsl:value-of select="//body/title[1]"/></h1>
				<xsl:apply-templates select="//body"/>
			</body>		
		</html>
	</xsl:template>
	
	<xsl:template match="p"><p><xsl:apply-templates/></p></xsl:template>
	<xsl:template match="body"><xsl:apply-templates/></xsl:template>
	<xsl:template match="title">
		<xsl:choose>
			<xsl:when test="count(preceding::title)>0"><h2><xsl:apply-templates select="p//text()"/></h2></xsl:when>
			<xsl:otherwise></xsl:otherwise>
		</xsl:choose>
		
	</xsl:template>
	<xsl:template match="cite"><span class="red"><xsl:apply-templates/></span></xsl:template>
</xsl:stylesheet>
