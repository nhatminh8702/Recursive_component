export const initData = [
  { id: "0", name: "Phòng ban 1", level: 1, code: "DPM0-0", children: [] },
  {
    id: "1",
    name: "Phòng ban 1",
    level: 1,
    code: "DPM0-1",
    children: [
      {
        id: "11",
        name: "Phòng ban 11",
        level: 2,
        code: "DPM0-11",
        children: [],
      },
      {
        id: "12",
        name: "Phòng ban 12",
        level: 2,
        code: "DPM0-12",
        children: [],
      },
      {
        id: "13",
        name: "Phòng ban 13",
        level: 2,
        code: "DPM0-13",
        children: [],
      },
      {
        id: "14",
        name: "Phòng ban 14",
        level: 2,
        code: "DPM0-14",
        children: [
          {
            id: "111",
            name: "Phòng ban 19",
            level: 3,
            code: "DPM0-111",
            children: [
              {
                id: "1111",
                name: "Phòng ban 111",
                level: 4,
                code: "DPM0-1111",
                children: [],
              },
              {
                id: "1112",
                name: "Phòng ban 121",
                level: 4,
                code: "DPM0-1112",
                children: [],
              },
              {
                id: "1113",
                name: "Phòng ban 131",
                level: 4,
                code: "DPM0-1113",
                children: [],
              },
            ],
          },
          {
            id: "112",
            name: "Phòng ban A",
            level: 3,
            code: "DPM0-112",
            children: [],
          },
          {
            id: "113",
            name: "Phòng ban B",
            level: 3,
            code: "DPM0-113",
            children: [],
          },
        ],
      },
    ],
  },
  { id: "7", name: "Phòng ban 1A", level: 1, code: "DPM0-7", children: [] },
  { id: "8", name: "Phòng ban 1", level: 1, code: "DPM0-8", children: [] },
  { id: "9", name: "Phòng ban 1", level: 1, code: "DPM0-9", children: [] },
  { id: "10", name: "Phòng ban 1", level: 1, code: "DPM0-10", children: [] },
  { id: "11", name: "Phòng ban 1", level: 1, code: "DPM0-11", children: [] },
];

const k = "112";
const find = (list, id) => {
  let result;
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      result = list[i];
      break;
    } else {
      result = find(list[i].children, id);
      if (result) break;
    }
  }
  return result;
};

