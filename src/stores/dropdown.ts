import { defineStore } from "pinia";
import axios from "axios";

interface State {
  dataList: string[];
  dataValue: string | undefined;
  dataToken: DataInfo | null;
  dataForm: DataForm[] | null;
  isLoading: boolean;
}

export const ownStore = defineStore("userData", {
  state: (): State => {
    return {
      dataList: ["Не выбрано", "Сделка", "Контакт", "Компания"],
      dataValue: undefined,
      dataToken: null,
      dataForm: null,
      isLoading: false,
    };
  },
  actions: {
    changeValue(v: string) {
      this.dataValue = v;
    },
    async getData() {
      const str = {
        Сделка: "leads",
        Контакт: "contacts",
        Компания: "companies",
      };

      const fakeDataValue = {
        Сделка: [
          {
            name: "Сделка для примера 1",
            created_by: 0,
            price: 20000,
            custom_fields_values: [
              {
                field_id: 294471,
                values: [
                  {
                    value: "Наш первый клиент",
                  },
                ],
              },
            ],
          },
          {
            name: "Сделка для примера 2",
            price: 10000,
            _embedded: {
              tags: [
                {
                  id: 2719,
                },
              ],
            },
          },
        ],
        Контакт: [
          {
            name: "АО Рога и Копыта",
            custom_fields_values: [
              {
                field_code: "PHONE",
                values: [
                  {
                    value: "+7912322222",
                    enum_code: "WORK",
                  },
                ],
              },
            ],
          },
        ],
        Компания: [
          {
            first_name: "Петр",
            last_name: "Смирнов",
            custom_fields_values: [
              {
                field_id: 271316,
                values: [
                  {
                    value: "Директор",
                  },
                ],
              },
            ],
          },
          {
            name: "Владимир Смирнов",
            created_by: 47272,
          },
        ],
      };
      const fakeData = fakeDataValue[this.dataValue];

      try {
        const respons = await axios.post(
          `http://${this.dataToken.domain}/api/v4/${str[this.dataValue]}`,
          { fakeData },
          {
            headers: {
              Authorization: `Bearer ${this.dataToken.token}`,
            },
          }
        );

        const objValue: DataForm[] = Object.values(respons.data._embedded);

        const newId = {
          id: objValue[0][0].id,
          name: this.dataValue,
        };

        const prevData = this.dataForm === null ? "" : [...this.dataForm];
        const data = [...prevData, newId];
        this.dataForm = data;
        this.isLoading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async getToken() {
      this.isLoading = true;
      try {
        const respons = await axios.get(
          "http://test.gnzs.ru/oauth/get-token.php",
          {
            headers: {
              "X-Client-Id": "31334466",
            },
          }
        );

        this.dataToken = {
          token: respons.data.access_token,
          domain: respons.data.base_domain,
        };
        this.getData();
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});

interface DataInfo {
  token: string;
  domain: number;
}

interface DataForm {
  id: number;
  name: string;
}