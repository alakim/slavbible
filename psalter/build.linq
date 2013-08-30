<Query Kind="Program">
  <Namespace>System.IO</Namespace>
  <Namespace>System.Text.RegularExpressions</Namespace>
  <Namespace>System.Xml</Namespace>
  <Namespace>System.Xml.Xsl</Namespace>
</Query>

const string basePath = @"C:\Users\Alexandr.Akimov\Documents\SVN\GCode\SlavBible\trunk\psalter\src\";
const string destPath = @"C:\Users\Alexandr.Akimov\Documents\SVN\GCode\SlavBible\trunk\psalter\out\";

private Regex re = new Regex(@"\\(ps_\d+\.xml)$");

void Main(){
/*
	TransformPage("alph.xml", "gen.xslt", "alph.html");
	TransformPage("alph.xml", "chapter.xsl", "alph.html");
*/
	string[] files = Directory.GetFiles(basePath);
	//files.Dump();
	foreach(string file in files){
		Match mt = re.Match(file);
		if(mt.Success){
			string nm = mt.Groups[1].Value;
			TransformPage(nm, "Page.xsl", nm.Replace(".xml", ".html"));
		}
	}

/*
	TransformPage("intro.xml", "intro.xslt", "intro.html");
	TransformPage("foreword.xml", "intro.xslt", "foreword.html");
	TransformPage("alph.xml", "alph.xsl", "alph.html");
	TransformPage("book.xml", "book.xsl", "book.html");
*/
}


private void TransformPage(string src, string xsl, string dest){
	
	XsltSettings xsltSettings = new XsltSettings(true, false);
	XslCompiledTransform xslt = new XslCompiledTransform();
	xslt.Load(basePath+xsl, xsltSettings, new XmlUrlResolver());
	
	XmlReaderSettings settings = new XmlReaderSettings();
	settings.DtdProcessing = DtdProcessing.Parse;
	XmlReader reader = XmlReader.Create(basePath+src, settings);
	
	XmlWriter writer = XmlWriter.Create(destPath+dest);
	xslt.Transform(reader, writer);
}

// Define other methods and classes here