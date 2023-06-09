import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Select } from '@/common/ui/Select';
import { genderOptions, GenderType } from '@/model/Gender';
import { Likes, CreateIntroduceRequest } from '@/model/CreateIntroduce';
import { colors, spacings } from '@/common/ui/styles';
import { Button } from '@/common/ui/Button';
import { FormItem } from '@/common/ui/FormItem';
import { Input } from '@/common/ui/Input';
import { Plus, DeleteIcon } from '@/common/ui/Icons';

type LikeViewProps = {
  id: string;
  value: string;
  onChange: (val: { value: string; id: string }) => void;
  onClickDelete: (id: string) => void;
};
const LikeView = (props: LikeViewProps): JSX.Element => {
  const [input, updateInput] = useState(props.value);

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const val = e.target.value;
      updateInput(val);

      props.onChange({
        id: props.id,
        value: val,
      });
    },
    [props],
  );

  const handleDelete = useCallback(() => {
    props.onClickDelete(props.id);
  }, [props]);

  return (
    <LikeWrapper>
      <InputWrapper>
        <Input value={input} onChange={handleChange} placeholder='例）旅行' />
      </InputWrapper>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </LikeWrapper>
  );
};
const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.XS};
  width: 100%;
`;
const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
const InputWrapper = styled.div``;

type Props = {
  onSubmit: (val: CreateIntroduceRequest['value']) => void;
};
export const Form = ({ onSubmit }: Props): JSX.Element => {
  const [select, setSelect] = useState<GenderType>(genderOptions[0].value);

  const [age, setAge] = useState<number>(20);

  const [likes, setLikes] = useState<Likes>(() => [{ id: uuidv4(), value: '' }]);

  const handleChangeLikes = useCallback(({ id, value }: { id: string; value: string }) => {
    setLikes((likes) => {
      return likes.reduce<Likes>((acc, cur) => {
        return cur.id === id ? [...acc, { ...cur, value }] : [...acc, cur];
      }, []);
    });
  }, []);

  const handleChangeAge = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    const val = Number(e.target.value);
    setAge(val);
  }, []);

  const handleChange = useCallback((v: GenderType) => {
    setSelect(v);
  }, []);

  const handleClickAdd = useCallback(() => {
    setLikes((likes) => [...likes, { id: uuidv4(), value: '' }]);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setLikes((likes) => likes.filter((l) => l.id !== id));
  }, []);

  const handleClick = useCallback(async () => {
    onSubmit({
      gender: select,
      age,
      likes,
    });
  }, [select, onSubmit, likes, age]);

  return (
    <FormWrapper>
      <Span>簡単にプロフィールを入力してください↓</Span>

      <FormItem label='性別'>
        <InputWrapper>
          <Select options={genderOptions} onChange={handleChange} width='120px' />
        </InputWrapper>
      </FormItem>

      <FormItem label='年齢'>
        <InputWrapper>
          <Input value={age} onChange={handleChangeAge} type='number' min={12} />
        </InputWrapper>
      </FormItem>

      <FormItem label='好きなもの'>
        <LikesWrapper>
          {likes.map((l, idx) => {
            return (
              <React.Fragment key={`input${idx}${l.id}`}>
                <LikeView
                  value={l.value}
                  id={l.id}
                  onChange={handleChangeLikes}
                  onClickDelete={handleDelete}
                />
              </React.Fragment>
            );
          })}
          <SubLabel onClick={handleClickAdd}>
            追加する
            <Plus />
          </SubLabel>
        </LikesWrapper>
      </FormItem>
      <Button onClick={handleClick}>自己紹介を生成する</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: ${spacings.M};
`;
const Span = styled.span`
  padding: ${spacings.XS} 0;
`;
const LikesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacings.XS};
`;
const SubLabel = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${colors.gray};
  cursor: pointer;
  padding: ${spacings.S};
`;
