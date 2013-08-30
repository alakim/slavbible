<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="Windows-1251" indent="yes"/>
	
	<xsl:template match="psalter">
	<html>
	<head>
	<link rel="stylesheet" href="styles.css"/>
	<style>
	body{
/*		font-family: Irmologion UCS;*/
		font-size:21px;
	}
	a{
		color:black;
		text-decoration:none;
	}
	</style>
	</head>
	<body>
		<xsl:apply-templates select="psalm">
			<xsl:sort select="document(@file)/psalm/@nr" data-type="number"/>
		</xsl:apply-templates>
	</body>
	</html>
	</xsl:template>
	
	
	<xsl:template match="psalm">
		<a href="{@file}">
			<xsl:apply-templates select="document(@file)//title/."/><br/>
			<div style="font-size:70%; margin-left:60px;">
				<xsl:apply-templates select="document(@file)//verse[@nr&lt;2]"/>
			</div>
		</a>
	</xsl:template>
	
	<xsl:template match="rus"/>
	
	<xsl:template match="num">
		<xsl:if test="preceding-sibling::text()">
			<span style="color:red;"><xsl:value-of select="."/></span>
		</xsl:if>
	</xsl:template>
</xsl:stylesheet>
