(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Tab" :
            			{
            				"class" :
            				[
            					{
            						"tab_TBF_mdi" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"class" :
            						[
            							{
            								"tab_TBF_mdi" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #b9b9b9, 1px solid #b9b9b9, 2px solid #3697f8, 1px solid #b9b9b9"),
            											"padding" : nexacro.PaddingObject("0px 10px 0px 14px"),
            											"font" : nexacro.FontObject("14px 'KoPubL'")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #b9b9b9, 1px solid #b9b9b9, 2px solid #3697f8, 1px solid #b9b9b9"),
            											"padding" : nexacro.PaddingObject("0px 10px 0px 14px"),
            											"font" : nexacro.FontObject("14px 'KoPubL'")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("1px solid #3697f8, 1px solid #3697f8, 2px solid white, 1px solid #3697f8"),
            											"padding" : nexacro.PaddingObject("10px 10px 10px 14px"),
            											"color" : nexacro.ColorObject("#0a5dad"),
            											"font" : nexacro.FontObject("14px 'KoPubL'")
            										},
            										"selected" :
            										{
            											"border" : nexacro.BorderObject("1px solid #3697f8, 1px solid #3697f8, 2px solid white, 1px solid #3697f8"),
            											"padding" : nexacro.PaddingObject("10px 10px 10px 14px"),
            											"color" : nexacro.ColorObject("#0a5dad"),
            											"font" : nexacro.FontObject("14px 'KoPubL'")
            										},
            										"mouseover_selected" :
            										{
            											"border" : nexacro.BorderObject("1px solid #3697f8, 1px solid #3697f8, 2px solid white, 1px solid #3697f8"),
            											"padding" : nexacro.PaddingObject("10px 10px 10px 14px"),
            											"color" : nexacro.ColorObject("#0a5dad"),
            											"font" : nexacro.FontObject("14px 'KoPubL'")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"tabbuttonitemtext" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"class" :
            								[
            									{
            										"tab_TBF_mdi" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("14px 'KoPubL'")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"class" :
            								[
            									{
            										"tab_TBF_mdi" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"padding" : nexacro.PaddingObject("7px 10px 7px 14px")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_TBF_mdiBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px, 0px, 2px solid #252c43, 0px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Button" :
            			{
            				"class" :
            				[
            					{
            						"btn_TBF_mdiAllX" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true,
            			"applyMarkupValidation" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
