window.alert = function()
{

}

function PicniiTest(no)
{
	this.no = no;

}

PicniiTest.prototype.expect = function(expected)
{
	var ex = expect(expected);

	return new PicniiExpect(this.no , ex, expected);
}

function PicniiExpect(no, ex, expected)
{
	this.caseNumber = no;
	this.ex = ex;
	this.expected = expected
	this.pass = function()
	{
		if(localStorage['picniiCase'+no] != 'false')
			localStorage['picniiCase'+no] = true;
	}

	this.notPass = function()
	{
		localStorage['picniiCase'+no] = false;
	}
}

PicniiExpect.prototype.toBe = function(actual)
{
	this.ex.toBe(actual);
	if(this.expected == actual)	
		this.pass();
	else
		this.notPass();
}

PicniiExpect.prototype.toEqual = function(actual)
{
	this.ex.toEqual(actual);
	if(this.expected == actual)	
		this.pass();
	else
		this.notPass();
}

PicniiExpect.prototype.toContain = function(actual)
{
	this.ex.toContain(actual);
	for(var i = 0 ;i < this.expected; i++)	
	{
		var childX = this.expected[i];
		if(actual == childX)
			this.pass();
		else
			this.notPass();
	}
}




function testLab(no)
{
	return new PicniiTest(no);
}

