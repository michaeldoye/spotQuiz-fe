#!/bin/bash
# Creates boilerplate for React Component

mkdir $1
cd $1
touch $1.js
touch $1.css
echo "import React from 'react';" >> $1.js
echo "import './$1.css';" >> $1.js
echo "" >> $1.js
echo "class $1 extends React.Component {" >> $1.js
echo "  render() {" >> $1.js
echo "    return (" >> $1.js
echo "" >> $1.js
echo "    );" >> $1.js
echo "  }" >> $1.js
echo "}" >> $1.js
echo "" >> $1.js
echo "export default $1;" >> $1.js