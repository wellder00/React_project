import { Dialog } from '@headlessui/react';

export default function MyModal({isModalOpen, setModalState, selectedItem}) {

  return (
    <>
      <div className="current-needs-myModal">
        <Dialog open={isModalOpen} onClose={() => setModalState(false, 0)}>
          <div className="myModal__bg">
            <Dialog.Panel className="myModal__popap">             
              <button className="myModal__popap_close" onClick={() => setModalState(false, 0)}><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7L17 17"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7L7 17"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg></button>
                
                <div className="myModal__bg_content">
                  <div className="myModal__bg_content_left-block_img">                    
                    <img className='current-needs-myModal_img' src={selectedItem.src} alt="selectedItem.img" /> 
                   
                  </div>
                  <div className="myModal__bg_content_right-block myModal__bg_content_right-block__scroll">
                    <h5 className='myModal__bg_content_right-block__title'>{selectedItem.title}</h5>
                    <section className='myModal__bg_content_right-block__sum'>{selectedItem.sum}</section>
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus quasi, eligendi eaque iusto nesciunt quisquam harum magni sed libero omnis aliquid autem odit facilis eveniet quidem deleniti soluta ipsam voluptas sit provident mollitia! Laboriosam, omnis autem eum necessitatibus delectus doloremque tenetur officiis cupiditate temporibus fugit incidunt, maxime, obcaecati quidem cumque ullam a ipsam quisquam odio iusto accusantium ut amet. Amet labore hic eum quaerat tempore accusantium, nobis eius. Dolores maiores eos blanditiis cumque maxime, repellat tenetur labore, esse voluptatibus tempore fuga rerum sit eaque vitae provident magnam voluptas officia nulla cum perspiciatis hic pariatur quaerat et similique. Exercitationem, laudantium quis, temporibus recusandae facilis eaque sint voluptatem expedita labore repellat ipsa minima quibusdam obcaecati voluptas enim a similique, architecto dolore nihil provident tempore asperiores voluptatibus debitis. Delectus inventore id nesciunt illo tempora debitis. Inventore tempore illum id voluptatibus quia ut? Facilis eaque nisi ipsa, repellat rem dolorem quod autem, labore fugit modi quas quam, a excepturi optio quia officia quo eveniet? Nesciunt quod animi voluptatem libero repellendus at ratione eligendi, aspernatur beatae voluptate qui dolorum eum iusto! Sint accusamus tenetur cupiditate assumenda? Fugiat debitis ipsum iusto atque culpa unde accusantium ab. Inventore similique enim, nihil quisquam placeat facere, mollitia iste fugiat quidem minus dolore excepturi, ea deserunt laboriosam labore ratione architecto optio? Vero laboriosam praesentium quo tempore odio dolore nulla rerum repudiandae, est distinctio adipisci similique suscipit, officia veritatis. Aperiam eligendi ipsum ad reiciendis quo voluptates! Culpa ab fugiat illum aut eveniet ex magnam id dignissimos tempore placeat deserunt repellat error obcaecati ipsa distinctio molestiae cum rem enim doloribus reprehenderit, at adipisci libero perferendis. Quidem similique eos quaerat at. Ipsa pariatur perferendis modi aut quas maiores quis eum maxime aliquam nam cumque dolorem, voluptate reiciendis totam, voluptates illo assumenda perspiciatis dolores fuga fugit? Quos eum, tempora debitis odio eaque voluptas nemo exercitationem eligendi dignissimos aliquam, excepturi molestias vero ullam suscipit hic doloribus asperiores placeat ducimus similique libero nobis qui voluptate sapiente! Enim aperiam quas nihil maiores iste molestiae hic minus animi, placeat a odit eveniet similique velit, architecto doloremque voluptatum in officiis eum voluptatibus soluta. Dolore vero eos aspernatur delectus esse sed sit ipsa perspiciatis odio cumque quas unde voluptates tempora, culpa, rem accusantium asperiores adipisci dolor illum porro voluptatem incidunt. Voluptas, animi necessitatibus commodi ut dolor, ipsam ab magnam eligendi distinctio perferendis sit optio voluptatibus velit numquam autem possimus blanditiis asperiores ex. Quisquam accusantium error, mollitia similique veniam, explicabo ipsa obcaecati provident placeat quaerat rerum repudiandae in culpa? Blanditiis provident iure maxime aperiam. Nisi maxime laudantium quia, quae omnis dolorem minima sunt facilis tempora ipsum assumenda soluta eius magnam odit quam harum, odio fuga! Sint sapiente aperiam dolorem libero possimus quas saepe voluptatum asperiores illum. Possimus quam quos et qui ratione ipsum nisi perspiciatis omnis earum ex illo, facere amet aperiam a minima eum, sed laboriosam dolores sunt! Placeat asperiores porro veritatis ipsa ducimus. Quae, eius quo. Temporibus veritatis consequuntur voluptates. Pariatur excepturi maiores perferendis. Consequuntur a impedit sint nesciunt. In pariatur quod ex eligendi unde quas placeat a explicabo delectus? Dignissimos repellendus, cum tempora quo sint cupiditate earum id deleniti? Ipsa omnis reprehenderit, quaerat ipsum totam illo consectetur explicabo officiis impedit quo vel suscipit voluptates, eum sed excepturi cum cupiditate blanditiis porro minima. Explicabo porro eius, sequi consequatur eum tempore optio placeat, accusantium nihil culpa nesciunt ipsam ipsum ipsa facilis commodi expedita voluptates quas illum similique perferendis sint sit cum nam. Quibusdam magni deserunt magnam veniam, omnis alias! Rem fugiat iure quibusdam cum, maxime, tempore distinctio sed provident alias incidunt nesciunt qui accusamus repellat dicta officiis impedit commodi totam nihil! Laudantium sint ipsa expedita et, illum assumenda hic eos consequuntur quia, eveniet odio nemo eius voluptatibus dolor minima culpa velit cupiditate placeat, quod fugiat magnam distinctio autem officia? Molestiae pariatur modi temporibus cum debitis ex similique fugit unde provident, voluptates quasi iusto, dignissimos commodi vero nihil corporis ipsum dolores totam aperiam error aspernatur nisi saepe! Doloribus adipisci recusandae quas vel doloremque officia. Ea inventore, enim fugiat maxime asperiores voluptatem optio, voluptatum accusamus dignissimos nihil quisquam explicabo amet possimus, sunt molestiae distinctio quidem quo debitis aliquam vero eligendi? Iusto deleniti quasi possimus minima necessitatibus quisquam optio nostrum inventore nihil? Quasi excepturi adipisci sint aperiam ad eligendi nihil odit eos tempora minus similique facilis architecto incidunt tempore eius hic quam, unde blanditiis porro laudantium modi a voluptas et velit! Alias aliquam praesentium soluta qui accusamus quidem, vero ipsa, dolor tenetur necessitatibus mollitia incidunt autem laboriosam tempore facilis aliquid id nesciunt. Optio, aliquam. Numquam suscipit quam dolor molestias corrupti fugiat, quis eos accusantium alias, maxime corporis sit doloribus minima hic ipsa adipisci, sapiente magnam nemo officia. Cum corporis eius, harum eum sunt optio odio itaque unde explicabo ea facere in consequatur nostrum, ex impedit sed animi a expedita totam cumque! Reiciendis, dolor modi ab perferendis veniam ex iure alias magnam rem unde soluta natus cumque illo dicta esse ullam id exercitationem quae ipsam a provident, in qui autem asperiores. Cupiditate ipsum corporis voluptate earum dignissimos cum, nisi quibusdam esse saepe reprehenderit necessitatibus vel mollitia provident ex, rem fugiat eveniet? Voluptates expedita quos, delectus eaque corporis earum eveniet eius minus, pariatur explicabo tenetur? Soluta, similique facere! Aliquam, dolor cum, tempore fugiat asperiores error ipsa, veniam aperiam voluptate maiores vel quia! Minima, accusamus veniam. Veritatis provident, magni optio obcaecati quaerat maiores accusantium cupiditate architecto impedit velit modi pariatur saepe, commodi esse hic perspiciatis error nemo consequuntur molestiae molestias ea. Ab cumque ex ipsum! Architecto mollitia distinctio est quod autem cum fugit, laborum iste perspiciatis deleniti tempora enim culpa dolorum expedita sed vero soluta, temporibus pariatur illo ipsum consequatur corrupti? Est adipisci quos minus pariatur maxime explicabo dolorem cupiditate consequuntur aliquam accusantium! Id officia quis vero veritatis fugit exercitationem debitis quae repellendus repudiandae sapiente molestias amet, architecto cum iure in libero velit eius voluptatem laboriosam obcaecati aliquam, eveniet similique maiores? Eligendi esse deleniti numquam pariatur tempore repudiandae minus rerum necessitatibus, libero saepe hic possimus. Quos explicabo dolorem nihil sequi quidem eius doloribus et consectetur rerum molestias beatae vitae, nemo iusto impedit ex quas unde.
                    </div>
                    <span>{selectedItem.date}</span>
                  </div>
                </div>
              
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </>
  );
}
