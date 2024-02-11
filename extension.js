({
    name: "DS18B20", // Category Name
    description: "get the temperature from DS18B20",
    author: "microBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#2C3E50", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
    {
        xml: `
            <block type="ds18b20_read">
                <value name="pin">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value>
            </block>
        `
    },
    ],
    supportArduinoPlatform: true,
    depends: [ // Arduino library
        "DS18B20@1.0.0",
        "OneWire@2.3.7"
    ]
});
