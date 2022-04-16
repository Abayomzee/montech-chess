import React from "react";
import Center from "components/atoms/center";
import { useRouter } from "next/router";
import GameBoardTemplate from "components/templates/GameBoardTemplate";
import Button from "components/atoms/button";
import CaretLeft from "components/atoms/svgIcons/CaretLeft";
import PlayerTime from "components/organisms/PlayerTime";
import Typography from "components/atoms/Typography";

interface Props {}
const Playing: React.FC<Props> = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <>
      <GameBoardTemplate title="Playing">
        <main className="pb-14">
          <Center className="playing-screen">
            <div>
            <Button onClick={()=>router.back()} className="flex items-center gap-3 btn-back mb-10">
              <CaretLeft /> Go Back
            </Button>
            </div>
            <div className="board-wrapper">
              <div className="board-center">
                {type === 'spectator'? <Typography as='h3' className='spectating-heading' text='SPECTATING' /> :''}
                <PlayerTime name="Opponent" />
                <div className='board-holder my-4'>
                  <img src='/assets/images/board.svg' />
                </div>
                <PlayerTime name="My Avatar" />
              </div>
            </div>
          </Center>
        </main>
      </GameBoardTemplate>
    </>
  );
};

export default Playing;
