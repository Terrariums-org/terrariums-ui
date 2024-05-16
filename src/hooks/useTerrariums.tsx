import { useEffect, useState } from "react";
import { getTerariumsByUserService } from "../services/services/terrariums/getTerrariumsByUser.service";
import { TerrariumForList } from "../entities/entity";

export const useTerrariums = (id: number = 0, token: string) => {
  const [terrariums, setTerrariums] = useState<TerrariumForList[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);
  const [filterKey, setFilterKey] = useState<string>("");

  useEffect(() => {
    if (id === 0) return;
    if (filterKey === "") {
      setIsLoading(true);
      getTerariumsByUserService(id, token)
        .then((res: TerrariumForList[]) => {
          setTerrariums(res);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [filterKey]);

  useEffect(() => {
    if (id === 0) return;
    if (!Array.isArray(terrariums)) return;
    if (filterKey !== "") {
      setIsLoading(true);
      const filteredTerrariums = terrariums.filter((terrarium) => {
        const { name } = terrarium;
        return name.toLowerCase().includes(filterKey.toLowerCase());
      });
      setTerrariums(filteredTerrariums);
      setIsLoading(false);
    }
  }, [filterKey]);

  const addFilterKey = (key: string) => {
    setFilterKey(key);
  };

  return {
    terrariums,
    isloading,
    addFilterKey,
  };
};
