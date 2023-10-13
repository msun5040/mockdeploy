export function mockedSearchZoo(column: string | number, searchFor: string) {
  let responseMap = new Map<string, string[][]>();
  //   const zooMap = JSON.parse(
  //     '{"data":{"headers":["one","two","three","four","five"],' +
  //       '"body":[["01","Bronx Zoo","Jeremy","tiger","steak"],["02","San Francisco Zoo","Sean","tiger","steak"],' +
  //       '["03","San Francisco Zoo","John","human","tiger"],["04","Maryland Zoo","Lawn","penguin","krill"],' +
  //       '["05","Baltimore Zoo","Prawn","penguin","krill"],["06","New York Zoo","Drawn","penguin","sardines"]]},"type":"success"}'
  //   );
  const zooMap: { [col: string]: { [search: string]: JSON } } = {
    "animal": {
      "tiger":
        JSON.parse(
          '{"body":[["01", "Bronx Zoo", "Jeremy", "tiger", "steak"],' +
            '["02", "San Francisco Zoo", "Sean", "tiger", "steak"],' +
            '["03", "San Francisco Zoo", "John", "human", "tiger"]]}'
        ),
      // "penguin":
      //     [
      //         ["04", "Maryland Zoo", "Lawn", "penguin", "krill"],
      //         ["05", "Baltimore Zoo", "Prawn", "penguin", "krill"],
      //         ["06", "New York Zoo", "Drawn", "penguin", "sardines"]
      //     ],
      //     "human":
      //     [
      //         ["03", "San Francisco Zoo", "John", "human", "tiger"]
      //     ]

      // },
      // "animal" :  {
      //     "tiger" :
      //     [
      //         ["01", "Bronx Zoo", "Jeremy", "tiger", "steak"],
      //         ["02", "San Francisco Zoo", "Sean", "tiger", "steak"]
      //     ],
      //     "human" :
      //     [
      //         ["03", "San Francisco Zoo", "John", "human", "tiger"]
      //     ],
      //     "penguins" :
      //     [
      //         ["04", "Maryland Zoo", "Lawn", "penguin", "krill"],
      //         ["05", "Baltimore Zoo", "Prawn", "penguin", "krill"],
      //         ["06", "New York Zoo", "Drawn", "penguin", "sardines"]
      //     ]
      // },
      // "food" :  {
      //     "tiger" :
      //     [
      //         ["03", "San Francisco Zoo", "John", "human", "tiger"]
      //     ],
      //     "penguins" :
      //     [
      //         ["04", "Maryland Zoo", "Lawn", "penguin", "krill"],
      //         ["05", "Baltimore Zoo", "Prawn", "penguin", "krill"],
      //         ["06", "New York Zoo", "Drawn", "penguin", "sardines"]
      //     ],
      //     "krill" :
      //     [
      //         ["04", "Maryland Zoo", "Lawn", "penguin", "krill"],
      //         ["05", "Baltimore Zoo", "Prawn", "penguin", "krill"]
      //     ],
      //     "sardines" :
      //     [
      //         ["06", "New York Zoo", "Drawn", "penguin", "sardines"]
      //     ]
    },
  };

  console.log(zooMap);
  console.log("ues");
  console.log(column)
  console.log(searchFor)
  if (
    !(column in zooMap) ||
    !(searchFor in zooMap[column])
  ) {
    console.log("inside if");
    return JSON.parse("[[]]");
  } else if (column in zooMap && searchFor in zooMap[column]) {
    console.log(zooMap[column][searchFor])
    return zooMap[column][searchFor];
  }
}
