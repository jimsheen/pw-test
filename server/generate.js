module.exports = function() {
  const faker = require('faker');
  var _ = require('lodash');


  const areaNames = ['customer', 'site', 'floor', 'area'];
  const inspectionNames = ['inspection_type_1', 'inspection_type_2', 'inspection_type_3'];
  const divisionNames = ['division_1', 'division_2'];
  const users = _.times(4, (id) => ({
    id,
    name: faker.name.findName(),
  }));

  const createData = (arr) => {

    return arr.reduce((newArr, name, id) => {

      newArr.push({
        id: id + 1,
        name,
      });

      return newArr
    }, [])
  };

  const divisions = createData(divisionNames);
  const areaTypes = createData(areaNames);
  const inspectionTypes = createData(inspectionNames);

  const store = {
    divisions,
    areaTypes,
    inspectionTypes,
  };

  const randomScore = () => Math.floor(Math.random() * 100) + 1;

  const createInspectionData = (numRecords = 1) => {

    let inspection = [];

    _.times(numRecords, (id) => {

      _.times(divisionNames.length, (divisionId) => {

        _.times(areaNames.length, (areaTypeId) => {

          _.times(inspectionNames.length, (inspectionTypeId) => {

            _.times(users.length, (userId) => {
              inspection.push({
                division_name: divisions[divisionId].name,
                area_type_name: areaTypes[areaTypeId].name,
                inspection_type_name: inspectionTypes[inspectionTypeId].name,
                username: users[userId].name,
                score: randomScore(),
                id: id++,
                answers: [{
                  question_id: areaTypeId + 1,
                  answer: `answer ${areaTypeId + 1}`,
                }]
              })
            })
          })
        })
      })
    })
    return inspection
  };


  return {
    ...store,
    users,
    inspections: createInspectionData(),
    questions: _.times(4, (id) => ({
      id,
      question: `Question ${id}`,
      answers: ['answer 1', 'answer 2', 'answer 3']
    }))
  }
};
