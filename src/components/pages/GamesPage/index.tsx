import React, { useState, useEffect } from "react";
import Center from "components/atoms/center";
import DefaultTemplate from "components/templates/DefaultTemplate";
import Button from "components/atoms/button";
import PlusIcon from "components/atoms/svgIcons/PlusIcon";
import CalenderIcon from "components/atoms/svgIcons/CalenderIcon";
import CaretDown from "components/atoms/svgIcons/CaretDown";
import AvailableGamesTable from "components/organisms/AvailableGamesTable";
import NewRoomModal from "components/organisms/Modals/NewRoomModal";
import CompletedGamesTable from "components/organisms/CompletedGamesTable";
import { useRouter } from "next/router";
import TabNavigator from "components/atoms/TabNavigator";

interface Props {}
const GamesPage: React.FC<Props> = () => {
  // State
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeTab, setTab] = useState<any>();

// Hooks
  const router = useRouter();
  
  // Variables
  const { tab } = router.query;
  const tabs = [
    {
      label: "Available Games",
      slug: "available-games",
      component: <AvailableGamesTable />,
    },
    {
      label: "Completed Games",
      slug: "completed-games",
      component: <CompletedGamesTable />,
    },
  ];

  // Effects
  useEffect(() => {
    const index = tabs.findIndex((t) => t.slug === tab);

    if (index >= 0) {
      setTab(tabs[index]);
    } else {
      setTab(tabs[0]);
    }
  }, [tab]);

  // Data to Render
  return (
    <>
      <DefaultTemplate title="Games">
        <main className="pb-14">
          <Center>
            <div className="games-top-actions">
              <Button className="btn-2 flex items-center gap-3">
                <CalenderIcon /> MAY 18 - MAY 24 <CaretDown />
              </Button>
              <Button
                onClick={() => setShowModal(!showModal)}
                className="btn-1 flex items-center gap-3"
              >
                <PlusIcon /> Create New Room
              </Button>
            </div>

            <div className="tab-navigators">
              {tabs.map((t, i) => (
                <TabNavigator
                  key={i}
                  label={t.label}
                  active={t.slug === tab}
                  handleSelect={() => router.push(`/games/${t.slug}`)}
                />
              ))}
            </div>
            {activeTab && activeTab.component}
          </Center>
        </main>
      </DefaultTemplate>

      {showModal && <NewRoomModal close={setShowModal} />}
    </>
  );
};

export default GamesPage;
