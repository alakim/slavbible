<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="psalm">
	<html>
	<head>
	<link rel="stylesheet" type="text/css" href="styles.css"/>
	<script type="text/javascript" src="scripts.js">;</script>
	</head>
	<body>
		<xsl:variable name="nr"><xsl:value-of select="@nr"/></xsl:variable>
		<table border="0" width="100%">
		<tr>
			<td><a href="ps_{$nr - 1}.html">пред.</a></td>
			<td width="1000"></td>
			<td><a href="ps_{$nr + 1}.html">слёд.</a></td>
		</tr>
		</table>
		<xsl:apply-templates select="title"/>
		<table border="0" cellpadding="3" cellspacing="0">
		<xsl:apply-templates select="verse"/>
		</table>
	</body>
	</html>
</xsl:template>

<xsl:template match="title">
	<h1>
		<span>
			<xsl:attribute name="title"><xsl:value-of select="rus"/></xsl:attribute>
			<xsl:apply-templates/>
		</span>
	</h1>
</xsl:template>

<xsl:template match="title/rus"></xsl:template>

<xsl:template match="text()"><xsl:value-of select="."/></xsl:template>

<xsl:template match="verse">
	<tr>
		<td class="slav"><xsl:apply-templates select="slav"/></td>
		<td class="rusctrl" width="10" onclick="ToggleRus()">&#160;</td>
		<td class="rus" width="20%"><xsl:apply-templates select="rus"/></td>
	</tr>
</xsl:template>

<xsl:template match="num"><span class="number"><xsl:value-of select="."/></span></xsl:template>

<xsl:template match="initial"><div class="init"><xsl:value-of select="."/></div></xsl:template>
</xsl:stylesheet>
