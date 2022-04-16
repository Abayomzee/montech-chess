import React, { useState } from "react";
import Center from "components/atoms/center";
import Typography from "components/atoms/Typography";
import { injected, CoinbaseWallet } from "utils/web3/Connectors";
import { useWeb3React } from "@web3-react/core";
import DefaultTemplate from "components/templates/DefaultTemplate";
import { useRouter } from "next/router";
import Button from "components/atoms/button";

interface Props {}
const Home: React.FC<Props> = () => {
  // State
  const [loadingMetamask, setLoadingMetamask] = useState<boolean>(false);
  const [loadingCoinbase, setLoadingCoinbase] = useState<boolean>(false);

  // Hooks
  const router = useRouter();
  const { active, account, activate } =
    useWeb3React();


  // Handlers
  const connect = async () => {
    setLoadingMetamask(true);
    try {
      await activate(injected);
      setLoadingMetamask(false);
      router.push("/games/available-games");
    } catch (error) {
      console.log(error);
      setLoadingMetamask(false);
    }
  };

  const connectCoin = async () => {
    setLoadingCoinbase(true);
    try {
      await activate(CoinbaseWallet);
      setLoadingCoinbase(false);
      router.push("/games/available-games");
    } catch (error) {
      setLoadingCoinbase(false);
      console.log(error);
    }
  };

  // Data to Render
  return (
    <>
      <DefaultTemplate title="Home">
        <main className="pt-28">
          <Center className="flex flex-col justify-center items-center">
            <>
              <Typography
                as="h2"
                className="text-center head-1"
                text="Welcome to Chess Games"
              />
              <Typography
                as="p"
                className="text-center paragraph-1 mb-14"
                text="Sign in with your wallet to be able to authenticate and play games"
              />
              {active ? (
                <Typography
                  as="p"
                  className="text-center paragraph-1"
                  text={`Connected to ${account}`}
                />
              ) : (
                <>
                  <Button
                    onClick={() => connect()}
                    className="flex items-center justify-center gap-2.5 mb-5 btn-primary"
                  >
                    {loadingMetamask ? (
                      "Connecting......"
                    ) : (
                      <>
                        <img src="/assets/images/icon-metamask.png" />
                        Sign in with metamask
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={() => connectCoin()}
                    className="flex items-center justify-center gap-2.5 btn-solid mb-3.5"
                  >
                    {loadingCoinbase ? (
                      "Connecting......"
                    ) : (
                      <>
                        <img src="/assets/images/icon-coinbase.png" />
                        Sign in with Coinbase Wallet
                      </>
                    )}
                  </Button>
                  <Button className="mt-3.5 btn-with-line">
                    Show more options
                  </Button>
                </>
              )}
            </>
          </Center>
        </main>
      </DefaultTemplate>
    </>
  );
};

export default Home;
